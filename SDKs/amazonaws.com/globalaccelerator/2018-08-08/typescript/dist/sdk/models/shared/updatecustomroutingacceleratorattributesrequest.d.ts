import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
    acceleratorArn: string;
    flowLogsEnabled?: boolean;
    flowLogsS3Bucket?: string;
    flowLogsS3Prefix?: string;
}
