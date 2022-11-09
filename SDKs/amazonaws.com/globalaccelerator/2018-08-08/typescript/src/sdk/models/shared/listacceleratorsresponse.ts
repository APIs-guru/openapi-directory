import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Accelerator } from "./accelerator";


export class ListAcceleratorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accelerators", elemType: shared.Accelerator })
  accelerators?: Accelerator[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
