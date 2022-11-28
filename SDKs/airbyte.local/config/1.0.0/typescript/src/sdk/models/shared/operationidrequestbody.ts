import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OperationIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
