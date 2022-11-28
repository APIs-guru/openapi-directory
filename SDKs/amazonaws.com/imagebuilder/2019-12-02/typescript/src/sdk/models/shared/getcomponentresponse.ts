import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";



export class GetComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=component" })
  component?: Component;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
