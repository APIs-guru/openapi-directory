import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://ec2-instance-connect.{region}.amazonaws.com", "https://ec2-instance-connect.{region}.amazonaws.com", "http://ec2-instance-connect.{region}.amazonaws.com.cn", "https://ec2-instance-connect.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * sendSshPublicKey - Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2 User Guide</i>.
    **/
    sendSshPublicKey(req: operations.SendSshPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.SendSshPublicKeyResponse>;
    /**
     * sendSerialConsoleSshPublicKey - Pushes an SSH public key to the specified EC2 instance. The key remains for 60 seconds, which gives you 60 seconds to establish a serial console connection to the instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in the <i>Amazon EC2 User Guide</i>.
    **/
    sendSerialConsoleSshPublicKey(req: operations.SendSerialConsoleSshPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.SendSerialConsoleSshPublicKeyResponse>;
}
export {};
