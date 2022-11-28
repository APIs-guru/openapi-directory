import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



export class CreateSubnetResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnet?: Subnet;
}
