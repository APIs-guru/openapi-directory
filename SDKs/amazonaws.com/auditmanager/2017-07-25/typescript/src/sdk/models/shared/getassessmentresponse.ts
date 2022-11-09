import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Assessment } from "./assessment";
import { Role } from "./role";


export class GetAssessmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessment" })
  assessment?: Assessment;

  @Metadata({ data: "json, name=userRole" })
  userRole?: Role;
}
