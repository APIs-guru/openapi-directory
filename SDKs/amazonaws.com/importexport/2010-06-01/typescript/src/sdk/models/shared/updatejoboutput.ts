import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";



// UpdateJobOutput
/** 
 * Output structure for the UpateJob operation.
**/
export class UpdateJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Artifact })
  artifactList?: Artifact[];

  @SpeakeasyMetadata()
  success?: boolean;

  @SpeakeasyMetadata()
  warningMessage?: string;
}
