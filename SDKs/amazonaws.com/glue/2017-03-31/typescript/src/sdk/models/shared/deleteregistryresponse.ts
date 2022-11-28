import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryStatusEnum } from "./registrystatusenum";



export class DeleteRegistryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RegistryStatusEnum;
}
