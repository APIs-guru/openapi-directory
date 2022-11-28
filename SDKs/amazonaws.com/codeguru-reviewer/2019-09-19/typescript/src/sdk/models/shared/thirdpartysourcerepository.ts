import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThirdPartySourceRepository
/** 
 *  Information about a third-party source repository connected to CodeGuru Reviewer. 
**/
export class ThirdPartySourceRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner: string;
}
