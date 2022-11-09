import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorDetail } from "./errordetail";


export class BatchDeleteConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.ErrorDetail })
  errors?: Map<string, ErrorDetail>;

  @Metadata({ data: "json, name=Succeeded" })
  succeeded?: string[];
}
