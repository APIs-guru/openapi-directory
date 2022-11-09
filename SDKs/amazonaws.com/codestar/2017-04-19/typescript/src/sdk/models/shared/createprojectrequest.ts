import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Code } from "./code";
import { Toolchain } from "./toolchain";


export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sourceCode", elemType: shared.Code })
  sourceCode?: Code[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=toolchain" })
  toolchain?: Toolchain;
}
