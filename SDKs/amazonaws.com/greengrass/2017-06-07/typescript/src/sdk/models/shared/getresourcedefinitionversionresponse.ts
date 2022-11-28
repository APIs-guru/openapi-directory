import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDefinitionVersion } from "./resourcedefinitionversion";



export class GetResourceDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition?: ResourceDefinitionVersion;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
