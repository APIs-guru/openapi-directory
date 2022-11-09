import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThirdPartySourceRepository
/** 
 *  Information about a third-party source repository connected to CodeGuru Reviewer. 
**/
export class ThirdPartySourceRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Owner" })
  owner: string;
}
