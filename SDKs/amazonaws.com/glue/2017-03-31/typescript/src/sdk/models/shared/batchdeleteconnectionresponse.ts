import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



export class BatchDeleteConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ErrorDetail })
  errors?: Map<string, ErrorDetail>;

  @SpeakeasyMetadata({ data: "json, name=Succeeded" })
  succeeded?: string[];
}
