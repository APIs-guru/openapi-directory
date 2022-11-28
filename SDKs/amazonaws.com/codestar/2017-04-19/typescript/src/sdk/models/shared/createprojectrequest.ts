import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Code } from "./code";
import { Toolchain } from "./toolchain";



export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCode", elemType: Code })
  sourceCode?: Code[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=toolchain" })
  toolchain?: Toolchain;
}
