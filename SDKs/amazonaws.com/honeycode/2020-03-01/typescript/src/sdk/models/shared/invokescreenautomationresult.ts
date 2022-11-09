import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvokeScreenAutomationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}
