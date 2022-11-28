import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveViolation } from "./activeviolation";



export class ListActiveViolationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeViolations", elemType: ActiveViolation })
  activeViolations?: ActiveViolation[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
