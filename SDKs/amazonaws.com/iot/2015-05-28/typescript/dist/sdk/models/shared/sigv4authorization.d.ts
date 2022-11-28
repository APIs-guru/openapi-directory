import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>.
**/
export declare class SigV4Authorization extends SpeakeasyBase {
    roleArn: string;
    serviceName: string;
    signingRegion: string;
}
