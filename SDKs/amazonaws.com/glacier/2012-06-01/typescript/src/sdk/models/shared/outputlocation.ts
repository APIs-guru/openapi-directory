import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


// OutputLocation
/** 
 * Contains information about the location where the select job results are stored.
**/
export class OutputLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3" })
  s3?: S3Location;
}
