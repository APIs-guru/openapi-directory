import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryStatusEnum } from "./registrystatusenum";



export class GetRegistryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryArn" })
  registryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RegistryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedTime" })
  updatedTime?: string;
}
