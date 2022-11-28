import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";



export class ListTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: Type })
  types?: Type[];
}
