import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeArtifacts } from "./codeartifacts";


// S3RepositoryDetails
/** 
 *  Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files. 
**/
export class S3RepositoryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=CodeArtifacts" })
  codeArtifacts?: CodeArtifacts;
}
