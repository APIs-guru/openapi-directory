import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAcceleratorAttributesRequest extends SpeakeasyBase {
    acceleratorArn: string;
    flowLogsEnabled?: boolean;
    flowLogsS3Bucket?: string;
    flowLogsS3Prefix?: string;
}
