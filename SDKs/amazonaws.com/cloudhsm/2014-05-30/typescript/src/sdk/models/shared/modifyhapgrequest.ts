import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyHapgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HapgArn" })
  hapgArn: string;

  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionSerialList" })
  partitionSerialList?: string[];
}
