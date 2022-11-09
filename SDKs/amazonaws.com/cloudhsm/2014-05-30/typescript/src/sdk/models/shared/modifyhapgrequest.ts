import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyHapgRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HapgArn" })
  hapgArn: string;

  @Metadata({ data: "json, name=Label" })
  label?: string;

  @Metadata({ data: "json, name=PartitionSerialList" })
  partitionSerialList?: string[];
}
