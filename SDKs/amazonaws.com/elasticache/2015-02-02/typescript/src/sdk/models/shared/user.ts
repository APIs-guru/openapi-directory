import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  accessString?: string;

  @SpeakeasyMetadata()
  authentication?: Authentication;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  userGroupIds?: string[];

  @SpeakeasyMetadata()
  userId?: string;

  @SpeakeasyMetadata()
  userName?: string;
}
