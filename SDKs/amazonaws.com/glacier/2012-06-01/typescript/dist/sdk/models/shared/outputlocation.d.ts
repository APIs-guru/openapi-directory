import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * Contains information about the location where the select job results are stored.
**/
export declare class OutputLocation extends SpeakeasyBase {
    s3?: S3Location;
}
