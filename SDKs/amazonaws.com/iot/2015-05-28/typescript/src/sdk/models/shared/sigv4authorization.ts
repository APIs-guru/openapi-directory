import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SigV4Authorization
/** 
 * For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>.
**/
export class SigV4Authorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=signingRegion" })
  signingRegion: string;
}
