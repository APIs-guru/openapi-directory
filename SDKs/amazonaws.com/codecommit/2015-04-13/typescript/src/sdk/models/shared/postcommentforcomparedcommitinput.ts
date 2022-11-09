import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


export class PostCommentForComparedCommitInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterCommitId" })
  afterCommitId: string;

  @Metadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
