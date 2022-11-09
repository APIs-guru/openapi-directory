import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PatchOpEnum {
    Add = "add"
,    Remove = "remove"
,    Replace = "replace"
}


export class Patch extends SpeakeasyBase {
  @Metadata({ data: "json, name=op" })
  op: PatchOpEnum;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
