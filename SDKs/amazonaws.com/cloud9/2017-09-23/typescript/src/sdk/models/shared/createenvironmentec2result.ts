import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvironmentEc2Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;
}
