import { SpeakeasyBase } from "../../../internal/utils";
import { GlueConfiguration } from "./glueconfiguration";
/**
 * Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
**/
export declare class S3DestinationConfiguration extends SpeakeasyBase {
    bucket: string;
    glueConfiguration?: GlueConfiguration;
    key: string;
    roleArn: string;
}
