import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStorageVirtualMachineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId: string;
}
