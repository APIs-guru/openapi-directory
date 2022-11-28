import { SpeakeasyBase } from "../../../internal/utils";
import { SourceBuildInformation } from "./sourcebuildinformation";
import { S3Location } from "./s3location";
import { ApplicationVersionStatusEnum } from "./applicationversionstatusenum";
/**
 * Describes the properties of an application version.
**/
export declare class ApplicationVersionDescription extends SpeakeasyBase {
    applicationName?: string;
    applicationVersionArn?: string;
    buildArn?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    sourceBuildInformation?: SourceBuildInformation;
    sourceBundle?: S3Location;
    status?: ApplicationVersionStatusEnum;
    versionLabel?: string;
}
