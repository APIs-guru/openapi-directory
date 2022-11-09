import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Location
/** 
 * The location in Amazon S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. 
**/
export class S3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=ObjectVersion" })
  objectVersion?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
