import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Component } from "./component";


export class ListComponentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=components", elemType: shared.Component })
  components?: Component[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
