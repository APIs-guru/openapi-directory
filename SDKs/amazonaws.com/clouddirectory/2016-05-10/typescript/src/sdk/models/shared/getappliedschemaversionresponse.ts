import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppliedSchemaVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppliedSchemaArn" })
  appliedSchemaArn?: string;
}
