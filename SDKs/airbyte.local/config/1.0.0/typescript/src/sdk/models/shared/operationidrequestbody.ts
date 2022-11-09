import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OperationIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId: string;
}
