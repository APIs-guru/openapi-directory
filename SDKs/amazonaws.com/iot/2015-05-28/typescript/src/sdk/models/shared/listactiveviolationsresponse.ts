import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveViolation } from "./activeviolation";


export class ListActiveViolationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeViolations", elemType: shared.ActiveViolation })
  activeViolations?: ActiveViolation[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
