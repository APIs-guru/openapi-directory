import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";



export class ListComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: Component })
  components?: Component[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
