import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentEc2Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;
}
