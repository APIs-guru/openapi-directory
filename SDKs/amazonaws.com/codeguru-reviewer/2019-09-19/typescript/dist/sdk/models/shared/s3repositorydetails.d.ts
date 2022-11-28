import { SpeakeasyBase } from "../../../internal/utils";
import { CodeArtifacts } from "./codeartifacts";
/**
 *  Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.
**/
export declare class S3RepositoryDetails extends SpeakeasyBase {
    bucketName?: string;
    codeArtifacts?: CodeArtifacts;
}
