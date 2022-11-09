import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Component } from "./component";


export class GetComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=component" })
  component?: Component;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
