import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvokeScreenAutomationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}
