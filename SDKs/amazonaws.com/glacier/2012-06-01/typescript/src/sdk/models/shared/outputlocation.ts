import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



// OutputLocation
/** 
 * Contains information about the location where the select job results are stored.
**/
export class OutputLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3" })
  s3?: S3Location;
}
