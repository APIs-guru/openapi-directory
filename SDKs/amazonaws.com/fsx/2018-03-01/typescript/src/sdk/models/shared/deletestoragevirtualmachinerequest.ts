import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStorageVirtualMachineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId: string;
}
