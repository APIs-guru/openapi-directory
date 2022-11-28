import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assessment } from "./assessment";
import { Role } from "./role";



export class GetAssessmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessment" })
  assessment?: Assessment;

  @SpeakeasyMetadata({ data: "json, name=userRole" })
  userRole?: Role;
}
