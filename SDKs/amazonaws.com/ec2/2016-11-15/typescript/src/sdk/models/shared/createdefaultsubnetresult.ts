import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



export class CreateDefaultSubnetResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnet?: Subnet;
}
