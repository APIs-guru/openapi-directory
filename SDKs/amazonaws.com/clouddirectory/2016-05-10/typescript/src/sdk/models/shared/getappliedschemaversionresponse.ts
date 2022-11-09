import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppliedSchemaVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppliedSchemaArn" })
  appliedSchemaArn?: string;
}
