import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";



export class ListAcceleratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accelerators", elemType: Accelerator })
  accelerators?: Accelerator[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
