import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatchOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}


export class Patch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op: PatchOpEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
