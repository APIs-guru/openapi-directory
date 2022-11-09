import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SigV4Authorization
/** 
 * For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>.
**/
export class SigV4Authorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;

  @Metadata({ data: "json, name=signingRegion" })
  signingRegion: string;
}
